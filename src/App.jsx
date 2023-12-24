/** React */
import React from 'react'

/** Components */
import { Accordion } from './components'

function App() {
  return (
    <div>
      <Accordion.Root>
        <h1>Nataniel</h1>
        <Accordion.Item>
          <Accordion.Button>Button 1</Accordion.Button>
          <Accordion.Content>
            Conteúdo de button 1

            <Accordion.Item>
              <Accordion.Button>Button 1.1</Accordion.Button>
              <Accordion.Content>
                Conteúdo de button 1.1
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item>
              <Accordion.Button>Button 2.1</Accordion.Button>
              <Accordion.Content>
                Conteúdo de button 2.1

                <Accordion.Item>
                  <Accordion.Button>Button 2.1.1</Accordion.Button>
                  <Accordion.Content>
                    Conteúdo de button 2.1.1
                  </Accordion.Content>
                </Accordion.Item>                
              </Accordion.Content>
            </Accordion.Item>

          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Button>Button 2</Accordion.Button>
          <Accordion.Content>
            Conteúdo Button 2
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  )
}

export default App
