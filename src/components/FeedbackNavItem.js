import { ListItem, ListItemButton, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import RuleIcon from '@mui/icons-material/Rule'
import DangerousIcon from '@mui/icons-material/Dangerous';
import ErrorIcon from '@mui/icons-material/Error';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import InfoIcon from '@mui/icons-material/Info';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import MessageIcon from '@mui/icons-material/Message';
import React from 'react'
import { useTheme } from '@mui/material/styles';

class FeedbackNavItem extends React.Component {
    constructor(props) {
        super(props); 
    }

    getAvatarIcon(fbType) {
        switch(fbType) {
            case 'missing':
                return (<Avatar sx={{backgroundColor:"#e65100"}}>        
                            <RuleIcon/>
                        </Avatar>);
            case "major_bug":
                return (<Avatar sx={{backgroundColor:"#ef5350"}}>
                            <DangerousIcon/>
                        </Avatar>);
            case "minor_bug":
                return (<Avatar sx={{backgroundColor:"#ff8800"}}>
                            <ErrorIcon/>
                        </Avatar>);
            case "style_good":
                return (<Avatar sx={{backgroundColor:"#4caf50"}}>
                            <PlaylistAddCheckIcon/>
                        </Avatar>);
            case "style_correction":
                return (<Avatar sx={{backgroundColor:"#03a9f4"}}>
                            <StrikethroughSIcon/>
                        </Avatar>);
            case "info":
                return (<Avatar sx={{backgroundColor:"#bdbdbd"}}>
                            <InfoIcon/>
                        </Avatar>);
            case "positive":
                return (<Avatar sx={{backgroundColor:"#1b5e20"}}>
                            <ThumbUpAltIcon/>
                        </Avatar>);
            default:
                return (<Avatar>
                            <MessageIcon/>
                        </Avatar>);
        }
    }

    getTextDescription(fbType) {
        switch(fbType) {
            case 'missing':
                return "Missing Item";
            case "major_bug":
                return "Error";
            case "minor_bug":
                return "Correction";
            case "style_good":
                return "Good Style";
            case "style_correction":
                return "Style Correction";
            case "info":
                return "Information";
            case "positive":
                return "Positive";
            default:
                return "";
        }
    }

    render() {
        return(
                <ListItem key={this.props.id} disablePadding>
                    <ListItemButton selected={this.props.selected} onClick={this.props.onClick} color="error">
                        <ListItemAvatar color="error">
                            {this.getAvatarIcon(this.props.type)}
                        </ListItemAvatar>
                        <ListItemText primary={this.props.title} secondary={this.getTextDescription(this.props.type)}/>
                    </ListItemButton>
                </ListItem>
        )
    }
}
export default FeedbackNavItem