        navigateToNewsFeed = (routeName, _reload) => {&#xD;&#xA;            const backActionWithParams = NavigationActions.back({&#xD;&#xA;                index: 0,&#xD;&#xA;                actions: [NavigationActions.navigate({&#xD;&#xA;                    routeName,&#xD;&#xA;                    params: { isreload: _reload }&#xD;&#xA;                })]&#xD;&#xA;            });&#xD;&#xA;            this.props.navigation.dispatch(backActionWithParams);&#xD;&#xA;        }