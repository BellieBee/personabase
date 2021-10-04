import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import "bootstrap/dist/css/bootstrap.css"

/*const user = {
	nickName: 'Ryomen Sukuna',
	type: 'Curse',
	rank: 'Special Category+++',
	ocupation: 'Curses King',
	avatar: 'https://pbs.twimg.com/profile_images/1367470294995144707/LzdiLWj2_400x400.jpg'
};

function getNick(user) {

	return user.nickName;
}

function getGreeting(user) {

	if(user) {

		return <h1>Hi {getNick(user)}</h1>;
	}

	return <h1>Hello Stranger</h1>;
}

let imgAvatar = <img src={user.avatar} width="200" />;

let element = (
		<div>
			{getGreeting(user)}
			{imgAvatar}
		</div>
	);*/

ReactDOM.render(<App />, document.getElementById('root'));
