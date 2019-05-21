import React, { Component } from 'react';
import { Linking } from 'react-native';
import routeConfig from './router'

export default function(Comp, uriPrefix) {
  const router = Comp.router;
  return class extends Component {
    static router = router;

    _urlToPathAndParams(url) {
      const params = {};
      const delimiter = uriPrefix || '://';
      let path = url.split(delimiter)[1];
      let paramsArr = []
      
      if(path.indexOf('?')){
        let tmp = path.split('?')
        path = tmp[0]
        paramsArr = tmp[1] ? tmp[1].split('&') : []
      }

      paramsArr.forEach(item => {
        let acc = item.split('=')
        params[acc[0]] = acc[1]
      })

      if (!path) {
        path = url;
      }

      path = this._changePath(path)

      return {
        path,
        params
      };
    }

    _changePath(path){
      let arr = path.split('?')
      let path0 = routeConfig[arr[0]] || routeConfig[ '/' + arr[0]]
      if(path0){
        arr[0] = path0
        return arr.join('?')
      } else {
        return path
      }
    }

    _handleOpenURL = (url) => {
      const parsedUrl = this._urlToPathAndParams(url);
      if (parsedUrl) {
        const { path, params } = parsedUrl;
        const action = router.getActionForPathAndParams(path, params);
        if (action) {
          this.props.navigation.dispatch(action);
        }
      }
    };

    componentDidMount() {
      Linking.addEventListener('url', ({ url }) => {
        this._handleOpenURL(url);
      });

      Linking.getInitialURL().then(
        (url) => url && this._handleOpenURL(url)
      );
    }

    componentWillUnmount() {
      Linking.removeEventListener('url', this._handleOpenURL);
    }

    render() {
      return <Comp {...this.props} />;
    }
  };
}