import {
    Box,
    InputLabel,
    FormControl,
    MenuItem,
    Typography,
    Select,
  } from "@mui/material";
  
  const Detail = ({ titles,title,handleChange,  }) => {
    return (
        <div className="form-search">
            <h2>Dreadful Cherry Tomatoes</h2>
            <form onSubmit={ handleSubmit }>
                <input type="text" placeholder="Title movie" onChange={e=>setTitle(e.target.value)}/>
                <input type="submit" value="Search" />
            </form>
            { error && <p className="error">The movie doesn't exist </p> }
        </div>
    );
  };
  
  export default Detail;