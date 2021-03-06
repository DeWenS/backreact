define(['react', 'ui/navbar/navbar'], function(React, Navbar) {
    return React.createClass({
      getDefaultProps: function(){
        return {name: 'World!'};
      },
      render: function (){
        return <div>
                  <Navbar name={this.props.name}/>
                  <div className='container page'>
                    <div className='row'>
                      {this.props.children}
                    </div>
                  </div>
               </div>;
      }
    });
});
