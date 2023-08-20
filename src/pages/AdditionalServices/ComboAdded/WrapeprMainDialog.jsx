function WrapeprMainDialog({
    children
}) {
    return (
        <div
            className="flex flex-1 flex-col p-4 gap-y-3 rounded-lg bg-white"
        >
            {children}
        </div>
    )
}

export default WrapeprMainDialog;