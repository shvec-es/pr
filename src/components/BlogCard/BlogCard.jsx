import PropTypes from 'prop-types';

import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  Date,
} from './BlogCard.styled';
import { formatDateToNow } from 'helpers/formatDate';

export const BlogCard = ({
  poster,
  tag,
  title,
  description,
  name,
  avatar,
  postedAt,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardPoster src={poster} alt={title} />
      </CardHeader>
      <CardBody>
        <Tag>{tag}</Tag>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src={avatar} alt={name} />
          <UserInfo>
            <UserName>{name}</UserName>
            <Date>{formatDateToNow(postedAt)}</Date>
          </UserInfo>
        </UserBox>
      </CardFooter>
    </Card>
  );
};

BlogCard.propTypes = {
  poster: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  postedAt: PropTypes.string.isRequired,
};
