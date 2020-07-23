import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const ArticleCard = () => (
    <Card id="articleBox" style={{ width: '18rem' }}>
  <CardBody>
    <CardTitle>Article 1 Title</CardTitle>
    <CardSubtitle className="mb-2 text-muted">Probably will delete this but it's suppose to be a subtitle</CardSubtitle>
    <CardText>
      Maybe some description of the article or something idk but this is the body.
    </CardText>
  </CardBody>
</Card>
);

export default ArticleCard;