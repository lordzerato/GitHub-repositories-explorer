import { Card, Heading, Icon, Text } from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa6'
import type { Repository } from '../types/github'

type ReposCardProps = {
  item: Repository
}

const ReposCard = ({ item }: ReposCardProps) => {
  return (
    <Card.Root
      className="reposCard"
      variant="subtle"
      size="sm"
      colorPalette="purple"
    >
      <Card.Header className="reposCardHeader">
        <Heading size="md">{item.name}</Heading>
        <div>
          <div>{item.score}</div>
          <Icon size="md">
            <FaStar />
          </Icon>
        </div>
      </Card.Header>
      <Card.Body className="reposCardBody" minHeight="70px" fontSize="14px">
        <Text>{item.description}</Text>
      </Card.Body>
    </Card.Root>
  )
}

export default ReposCard
