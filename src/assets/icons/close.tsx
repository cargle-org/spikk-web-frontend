const CloseIcon = ({onClose, className} : {onClose: () => void, className: string}): JSX.Element => (
    <svg onClick={onClose} className={className} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 0C6.258 0 0 6.258 0 14C0 21.742 6.258 28 14 28C21.742 28 28 21.742 28 14C28 6.258 21.742 0 14 0ZM20 18.026L18.026 20L14 15.974L9.974 20L8 18.026L12.026 14L8 9.974L9.974 8L14 12.026L18.026 8L20 9.974L15.974 14L20 18.026Z" fill="#FF0000"/>
</svg>

);

export default CloseIcon;
