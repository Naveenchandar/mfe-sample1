import React from 'react'

const Dialog = ({ close, children }) => {
    return (
        <dialog open onClose={close}>
            <form>
                {children}
                <div>
                    <button value="cancel" formMethod="dialog">Cancel</button>
                    <button id="confirmBtn" value="default">Confirm</button>
                </div>
            </form>
        </dialog>
    )
}

export default Dialog