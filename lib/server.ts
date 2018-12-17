import app from "./app";
import { APP_PORT } from './utils/env'

//launch app on env port
app.listen(APP_PORT, () => {
    console.log('Express server listening on port ' + APP_PORT );
})