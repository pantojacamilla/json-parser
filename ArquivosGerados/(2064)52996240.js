    newTask = task => {&#xD;&#xA;      const { user, tasks } = this.state;&#xD;&#xA;      this.setState({&#xD;&#xA;        user: {&#xD;&#xA;          ...user,&#xD;&#xA;          tasks: [&#xD;&#xA;            ...tasks,&#xD;&#xA;            task&#xD;&#xA;          ]&#xD;&#xA;        }&#xD;&#xA;      })&#xD;&#xA;    }