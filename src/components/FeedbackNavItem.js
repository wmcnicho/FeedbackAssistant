import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react'

class FeedbackNavItem extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return(
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary={this.props.title} />
                    </ListItemButton>
                </ListItem>
        )
    }
}
export default FeedbackNavItem