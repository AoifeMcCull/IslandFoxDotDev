import './Home.css'
import { Card } from "@mui/material"
import { CardContent } from '@mui/material'
import { Typography } from '@mui/material'
function Home(){

    const introCard = (
        <CardContent>
            <Typography variant="h5" component="div">
                Ferrix
            </Typography>
            <Typography variant="body2">
                is gay as balls
            </Typography>
        </CardContent>
    )

    return(
        <div>
            <Card className="introCard">
                {introCard}
            </Card>
        </div>
    )
}

export default Home