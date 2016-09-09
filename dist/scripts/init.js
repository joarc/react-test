ReactDOM.render(
  <Index />,
  document.getElementById('content')
);
ReactDOM.render(
  <CommentBox />,
  document.getElementById('test')
);

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

var Index = React.createClass({
  render: function() {
    return (
      /*<div className="jumbotron">
        <h1>React Test</h1>
        <p>Some description</p>
        <p>
          <a href="#" className="btn btn-lg btn-primary">
            Btn
          </a>
        </p>
      </div>*/
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});
