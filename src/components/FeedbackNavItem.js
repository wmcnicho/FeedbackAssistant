import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react'

class FeedbackNavItem extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return(
                <ListItem key={this.props.id} disablePadding>
                    <ListItemButton selected={this.props.selected} onClick={this.props.onClick} >
                        <ListItemText primary={this.props.title} />
                    </ListItemButton>
                </ListItem>
        )
    }
}
export default FeedbackNavItem