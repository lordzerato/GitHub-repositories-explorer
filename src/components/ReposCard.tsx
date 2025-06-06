import { Card, Heading } from '@chakra-ui/react'
import { Star } from 'phosphor-react'

type ReposCardProps = {
  item: Repository
}

type Repository = {
  name: string
  description: string
  score: number
}

const ReposCard = ({ item }: ReposCardProps) => {
  return (
    <Card className="reposCard" variant="filled" size="lg">
      <div className="reposCardHeader">
        <Heading size="sm">{item.name}</Heading>
        <div>
          <div>{item.score}</div>
          <Star size={16} weight="fill" />
        </div>
      </div>
      <div className="reposCardBody">{item.description}</div>
    </Card>
  )
}

export default ReposCard
