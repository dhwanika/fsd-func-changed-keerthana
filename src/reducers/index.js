import { combineReducers } from 'redux'
import {requestSummaryReducer, requestParentTaskReducer, requestUserReducer, requestUserPostReducer,
  requestProjectPostReducer, requestProjectReducer} from './fsdReducer'

const rootReducer = combineReducers({
  taskList: requestSummaryReducer,
  parentTaskList:requestParentTaskReducer,
  taskInsert:requestSummaryReducer,
  taskUpdate:requestSummaryReducer,
  userList:requestUserReducer,
  userInsert:requestUserPostReducer,
  projectList:requestProjectReducer,
  projectInsert:requestProjectPostReducer
})

export default rootReducer