import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function InfoBox({info}){
    
    let ImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMDjFabmdJqtLjab-A4NDTNsl-WABK2pG1oA&s";
    let HOT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQICsLnnX0Dw3pcJ8HJnF3cJ9wFcza4NjiJBQ&s";
    let COLD_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdyc4YBfrOe_io3Z5O8RiFwzajAuIzql4PQ&s";
    let HUM_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-pkh1-fvW20SskANt85BREnBln7FfDtY4Vw&s"; 
    return(
        <div className="InfoBox">
            <br />
            <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={(info?.humidity > 80 ? HUM_URL : info?.temp > 15 ? HOT_URL : COLD_URL) || ImageUrl}

                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <p><b>Temp:</b> {info.temp}</p>
                    <p><b>Temp Max: </b>  {info.tempMax}</p>
                    <p><b>Temp Min: </b>
                         {info.tempMin}</p>
                    <p><b>Feels Like: </b>{info.feelsLike}</p>
                    <p><b>Weather: </b>
                         {info.weather}</p>
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </div>
    )
    
    
}