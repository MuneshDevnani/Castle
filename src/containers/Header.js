import './Header.css'
import { Button, makeStyles } from '@material-ui/core'
import QueueIcon from '@material-ui/icons/Queue'
import SmsIcon from '@material-ui/icons/Sms'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(9),
        height: theme.spacing(7),
    }
}))

function Header() {
    const classes = useStyles()
    return (
        <>
        <header className="header-main">
            <div className="search-area">
                <input type="text" className="search-box" placeholder="Search Your Desire" />
                <div className="horizontal-devider"></div>
                <input type="text" className="search-box" placeholder="Near by Places" />
            </div>
            <div className="left-menu">
                <Button>
                    <QueueIcon />
                </Button>
                <Button>
                    <SmsIcon />
                </Button>
                <div className="left-menu-box">
                    <Button>
                        <MenuIcon style={{color: 'white'}} />
                    </Button>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header