import { Route } from 'react-router-dom';
import Friends from './friends/friends';
import News from './news/news';
import './content.css'
import ProfileContainer from "./profile/ProfileContainer";
import DialogsContainer from "./dialogs/DialogsContainer";
import UsersContainer from "./users/UsersContainer";

const Content = () => {
    return (
        <div className="content">
            <Route exact path="/"> Главная страница </Route>
            <Route path="/dialogs" render={ () => <DialogsContainer/>} />
            <Route path="/profile" render={ () => <ProfileContainer />} />
            <Route path="/friends" component={Friends} />
            <Route path="/users" render={ () => <UsersContainer />} />
            <Route path="/news" component={News} />
        </div>
    );
}

export default Content;