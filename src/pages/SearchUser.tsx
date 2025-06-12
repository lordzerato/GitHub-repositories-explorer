import { useState } from 'react'
import { Wrap, Box } from '@chakra-ui/react'
import { LuListPlus } from 'react-icons/lu'
import FrameSearch from '../components/FrameSearch'

const SearchUser = () => {
  const [nFrame, setNFrame] = useState([1])
  const [nSequence, setNSequence] = useState(1)

  const handleAddFrame = () => {
    const newVal: number[] = [...nFrame, nSequence + 1]
    setNSequence(nSequence + 1)
    setNFrame(newVal)
  }
  return (
    <Wrap id="home" gap="21px">
      {nFrame.map((n) => (
        <FrameSearch key={n} title={`Frame ${n}`} />
      ))}
      {nFrame.length < 3 && (
        <Box minHeight="80vh">
          <LuListPlus
            color="var(--chakra-colors-bg\.icon)"
            size="72px"
            style={{ position: 'relative', top: '16rem' }}
            onClick={handleAddFrame}
          />
        </Box>
      )}
    </Wrap>
  )
}

export default SearchUser
