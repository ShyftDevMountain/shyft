insert into rides (originlat, originlong, origindate, destlat, destlong, status, driver_id, rider_id)
  values ($1, $2, $3, $4, $5, 'pending', $6, $7);
