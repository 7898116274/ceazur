import React from 'react';
import { Link } from "react-router-dom"
import { Card, CardMedia } from '@mui/material';
import mountain from "./image/mountain.png";
import beach from './image/beach.png';
import './CategoryType.css'; // Import the external CSS file


function CategoryType() {
      return (
            <div className="card-container">
                  <div className="card-wrapper">
                        <Link to="/mountain" className="card-wrapper">
                              <Card>
                                    <CardMedia
                                          component="img"
                                          alt="mountain"
                                          height="300"
                                          image={mountain}
                                          className="card-image"
                                    />
                                    <div className="card-text">Mountain Image</div>
                              </Card>
                        </Link>
                  </div>
                  <div className="card-wrapper">
                        <Link to="/beach" className='card-wrapper'>
                              <Card>
                                    <CardMedia
                                          component="img"
                                          alt="beach"
                                          height="300"
                                          image={beach}
                                          className="card-image"
                                    />
                                    <div className="card-text">Beach Image</div>
                              </Card>
                        </Link>
                  </div>
                  <div className="card-wrapper">
                        <Link to="/safari" className='card-wrapper'>
                              <Card>
                                    <CardMedia
                                          component="img"
                                          alt="safari"
                                          height="300"
                                          image={beach}
                                          className="card-image"
                                    />
                                    <div className="card-text">Safari Image</div>
                              </Card>
                        </Link>
                  </div>
            </div>
      );
}

export default CategoryType;
