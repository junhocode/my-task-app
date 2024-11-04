import { createSlice } from "@reduxjs/toolkit";

type TBoardsState = {
    modalActive : boolean;
    boardArray : []
};

const initialState = {
    modalActive : false,
    boardArray : [
        {
            boardId : 'board-0',
            boardName : '첫 번쨰 게시물',
            lists : [
                {
                    listId : 'list-0',
                    listName : 'list 1',
                    tasks : [
                        {
                            taskId : 'task-0',
                            taskName : 'Task 1',
                            taskDescription : 'Description 1',
                            taskOwner : 'junho'
                        },
                        {
                            taskId : 'task-1',
                            taskName : 'Task 2',
                            taskDescription : 'Description 2',
                            taskOwner : 'junho'
                        },
                        {
                            taskId : 'task-2',
                            taskName : 'Task 3',
                            taskDescription : 'Description 3',
                            taskOwner : 'junho'
                        },
                    ]
                },
                {
                    listId : 'list-1',
                    listName : 'list 2',
                    tasks : [
                        {
                            taskId : 'task-3',
                            taskName : 'Task 4',
                            taskDescription : 'Description 4',
                            taskOwner : 'junho'
                        }
                    ]
                },
            ]
        }
    ]
};

const boardSlice = createSlice ({
    name : 'board',
    initialState,
    reducers : {

    }
});

export const boardsReducer = boardSlice.reducer;