import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { ShowSinglePost } from '../redux/actions/post'
import { Button, Card, CardContent, Container, Typography } from '@mui/material'

const Details = () => {
  const {id} =  useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
const {singlePost} = useSelector(state => state.post)
useEffect(() => {
  dispatch(ShowSinglePost(id))
  }, [])
  
  return  <>
  <Container>

{
  singlePost && <>

  <Card sx={{maxWidth:"400px", margin:"10px"}}>
                            <CardContent style={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {singlePost.title}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="body-2">
                                    {singlePost.body}
                                </Typography>
                            </CardContent>
                                <Button onClick={e => navigate(`/post`)}>Back to</Button>
                        </Card>

  </>
}
  </Container>
  </>
}

export default Details