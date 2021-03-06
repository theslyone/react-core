export declare const UNDOABLE = "RA/UNDOABLE";
export interface StartUndoableAction {
    readonly type: typeof UNDOABLE;
    readonly payload: any;
}
export declare const startUndoable: (action: any) => StartUndoableAction;
export declare const UNDO = "RA/UNDO";
export interface UndoAction {
    readonly type: typeof UNDO;
}
export declare const undo: () => UndoAction;
export declare const COMPLETE = "RA/COMPLETE";
export interface CompleteAction {
    readonly type: typeof COMPLETE;
}
export declare const complete: () => CompleteAction;
export declare const START_OPTIMISTIC_MODE = "RA/START_OPTIMISTIC_MODE";
export interface StartOptimisticModeAction {
    readonly type: typeof START_OPTIMISTIC_MODE;
}
export declare const startOptimisticMode: () => StartOptimisticModeAction;
export declare const STOP_OPTIMISTIC_MODE = "RA/STOP_OPTIMISTIC_MODE";
export interface StopOptimisticModeAction {
    readonly type: typeof STOP_OPTIMISTIC_MODE;
}
export declare const stopOptimisticMode: () => StopOptimisticModeAction;
