import { Route } from 'react-router-dom';
import Dialogs from './dialogs/dialogs';
import Profile from './profile/profile';
import Friends from './friends/friends';
import News from './news/news';
import './content.css'

function Content(props) {
    return (
        <div className="content">
            <Route exact path="/"> Главная страница </Route>
            <Route path="/dialogs" render={ () => <Dialogs 
                                                    dialogs={props.state.dialogPage.dialogs}
                                                    messages={props.state.dialogPage.messages}
                                                    newMessageText={props.state.dialogPage.newMessageText}
                                                    dispatch={props.dispatch}/>} />
            <Route path="/profile" render={ () => <Profile 
                                                    posts={props.state.profilePage.posts}
                                                    newPostText={props.state.profilePage.newPostText}
                                                    dispatch={props.dispatch} />} />
            <Route path="/friends" component={Friends} />
            <Route path="/news" component={News} />
        </div>
    );
}

export default Content;