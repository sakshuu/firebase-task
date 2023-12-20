import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Grid, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { posts } from '../redux/actions/post';
import { useNavigate } from 'react-router-dom';

const Post = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(posts(page));
    }, [dispatch, page]);

    const { data, loading } = useSelector((state) => state.post);

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage((prevPage) => prevPage - 1);
        }
    };

    return (
        <Box sx={{ margin: "30px" }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {data.map((item) => (
                    <Grid onClick={e => navigate(`/${item.id}`)} item xs={2} sm={4} md={4} key={item.id}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardContent style={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Button variant="outlined" onClick={handlePrevPage} disabled={page === 1 || loading}>
                    Previous Page
                </Button>
                <Button variant="outlined" onClick={handleNextPage} disabled={page === 9 ||loading}>
                    Next Page
                </Button>
            </Box>
        </Box>
    );
};

export default Post;
