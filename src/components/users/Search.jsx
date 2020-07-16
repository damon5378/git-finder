import React, {useState, useContext} from 'react';
import GithubContext from '../../context/github/GithubContext';

const Search = (props) => {

    const githubContext = useContext(GithubContext);

   const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(text === '') {
            props.showAlert('Please enter the username', 'light')
        } else {
            githubContext.searchUsers(text);
        setText('');
        }
        
    }

    const onChange = (e) => {
        setText(e.target.value)
    }

        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input 
                        type="text" 
                        name="text" 
                        placeholder="Search Users..." 
                        className="search-input" 
                        value={text}
                        onChange={onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {
                    githubContext.users.length > 0 && <button onClick={githubContext.clearUsers} className="btn btn-info btn-block">Clear</button>
                }
                
            </div>
        )
}

export default Search
