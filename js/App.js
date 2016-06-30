import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            strietodo: [],
            progress: []
        }
		this.shouldComponentUpdate = (nextProps, nextState) => {
			return true
		};
    }

    componentDidMount() {
        initializeCards();
    }

    render() {
        var _this = this;

        var storyCards = this.props.stories.map(function(story) {
            return (
                <li className='story'>{story.title}</li>
            );
        });

        var todoCards = this.props.todo.map(function(task) {
            var cardClass = 'card ' + task.category;
            return (
                <div className={cardClass}>
                    <div className='overview'>
                        <div className='vc'>
                            <h3 className='category'>{task.category}</h3>
                            <ul className='assigned'>
                                <li><img src='images/sumin.jpg'/></li>
                                <li><img src='images/liam.jpg'/></li>
                                <li><img src='images/luke.jpg'/></li>
                            </ul>
                            <h2 className='task'>{task.task}</h2>
                            <div className='clearfix'>
                                <h3 className='due'>Due {task.due}</h3>
                                <div className='edit'>
                                    <i className='material-icons'>mode_edit</i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='content'>
                        <textarea placeholder="Add notes here"></textarea>
                    </div>
                </div>
            );
        });

        var progressCards = this.props.progress.map(function(task) {
            var cardClass = 'card ' + task.category;
            return (
                <div className={cardClass}>
                    <div className='overview'>
                        <div className='vc'>
                            <h3 className='category'>{task.category}</h3>
                            <ul className='assigned'>
                                <li><img src='images/sumin.jpg'/></li>
                                <li><img src='images/liam.jpg'/></li>
                                <li><img src='images/luke.jpg'/></li>
                            </ul>
                            <h2 className='task'>{task.task}</h2>
                            <div className='clearfix'>
                                <h3 className='due'>Due {task.due}</h3>
                                <div className='edit'>
                                    <i className='material-icons'>mode_edit</i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='content'>
                        <textarea placeholder="Add notes here"></textarea>
                    </div>
                </div>
            );
        });

        var completeCards = this.props.complete.map(function(task) {
            var cardClass = 'card ' + task.category;
            return (
                <div className={cardClass}>
                    <div className='overview'>
                        <div className='vc'>
                            <h3 className='category'>{task.category}</h3>
                            <ul className='assigned'>
                                <li><img src='images/sumin.jpg'/></li>
                                <li><img src='images/liam.jpg'/></li>
                                <li><img src='images/luke.jpg'/></li>
                            </ul>
                            <h2 className='task'>{task.task}</h2>
                            <div className='clearfix'>
                                <h3 className='due'>Due {task.due}</h3>
                                <div className='edit'>
                                    <i className='material-icons'>mode_edit</i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='content'>
                        <textarea placeholder="Add notes here"></textarea>
                    </div>
                </div>
            );
        });

        return (
            <div id='react-container'>
                <section className='stories'>
                    <header>
                        <h1 className='header'>Stories</h1>
                    </header>
                    <ul>
                        {storyCards}
                    </ul>
                    <div className='add-container'>
                        <a className='add'>+</a>
                    </div>
                </section>
                <section className='todo'>
                    <header>
                        <h1 className='header'>Todo</h1>
                    </header>
                    <div className='cards'>
                        {todoCards}
                    </div>
                    <div className='add-container'>
                        <a className='add'>+</a>
                    </div>
                </section>
                <section className='progress'>
                    <header>
                        <h1 className='header'>In Progress</h1>
                    </header>
                    <div className='cards'>
                        {progressCards}
                    </div>
                </section>
                <section className='complete'>
                    <header>
                        <h1 className='header'>Complete</h1>
                    </header>
                    <div className='cards'>
                        {completeCards}
                    </div>
                </section>
            </div>
        );
    }
}

export default App
