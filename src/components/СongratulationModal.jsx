import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const СongratulationModal = ({ open }) => (
  <Modal basic size='small' open={open}>
    <Header icon='trophy' content='Сongratulations!' />
    <Modal.Content>
      <p>
        You won the game.
        Your time: <b>15:07</b>.
        Total score: <b>1234</b>.
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color='red' inverted>
        <Icon name='remove' /> No
      </Button>
      <Button color='green' inverted>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
)

export default СongratulationModal