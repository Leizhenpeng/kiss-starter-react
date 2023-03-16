import { client, env } from 'kiss-core'
import { io_hook as io } from 'kiss-msg'
import './utils/notification'
import { event } from './event'

if (env.inMg){
  client.mg.showUI(__html__, {
    width: 500,
    height: 640,
    visible: true,
  })
}
else {
  client.figma.showUI(__html__, {
    width: 300,
    height: 400,
  })
}

io?.on(event.UI_CLOSE, () => {
  client.mg.closePlugin()
})

// io?.on(event.UI_INIT, () => {
//   firstParserConfig().then((config) => {
//     console.log('config', config)
//     io?.send(event.CODE_INIT_CONFIG, config)
//   })
// })

// io?.answer<Dto_Resize>('UI_CHANGE_SIZE', (data) => {
//   const sel = new SelParser().sel
//   const resizer = new IconResizer(sel, data)
//   resizer.run()
// })

// io?.on(event.UI_CHANGE_SIZE, (data) => {
//   const sel = new SelParser().sel
//   console.log(sel)
//   const resizer = new IconResizer(sel, data)
//   resizer.run()
// })
