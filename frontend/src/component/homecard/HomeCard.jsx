import React from "react";
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

export default function HomeCard() {

      return (
            <Card sx={{ maxWidth: 345 }} className="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden w-15rem mx-3">
                  {/* Image */}
                  <CardMedia
                        component="img"
                        height="175px"
                        width="180px"
                        image="https://m.media-amazon.com/images/I/61DMGsQ8qXL._AC_UL320_.jpg"
                        alt="Hoodies"
                        style={{ objectFit: "fill" }}
                  />
                  {/* Content */}
                  <CardContent className="p-4">
                        <Typography variant="h5" component="div" className="font-medium text-gray-900">
                              Hoodies
                        </Typography>
                        <Typography variant="body2" className="mt-2 text-gray-500">
                              Men's solid Pure Cotton
                        </Typography>
                  </CardContent>
            </Card>
      );
}
