export type SvgIcons = {
    messages: (data?: object) => JSX.Element
}

const icons: SvgIcons = {
    messages: (data = {}) : JSX.Element => {
        console.log("data", data)
        return (
            <svg viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...data}>
                <path d="M16.3809 19.1362C16.0967 19.1362 15.8126 19.0662 15.5559 18.9175L11.8801 16.835C11.4951 16.8262 11.1101 16.8 10.7434 16.7475C10.4959 16.7125 10.2851 16.555 10.1934 16.3275C10.1017 16.1 10.1476 15.855 10.3126 15.6712C10.9176 14.9975 11.2292 14.1925 11.2292 13.335C11.2292 11.2175 9.27674 9.49373 6.87507 9.49373C5.97674 9.49373 5.11506 9.73001 4.3909 10.185C4.18923 10.3075 3.94173 10.325 3.72173 10.2288C3.5109 10.1325 3.35507 9.93998 3.32757 9.71248C3.30007 9.46748 3.28174 9.2225 3.28174 8.96875C3.28174 4.62875 7.22341 1.10251 12.0634 1.10251C16.9034 1.10251 20.8451 4.62875 20.8451 8.96875C20.8451 11.3488 19.6901 13.5362 17.6551 15.0325L17.9667 17.4125C18.0401 18.0075 17.7651 18.5675 17.2426 18.8913C16.9859 19.0488 16.6834 19.1362 16.3809 19.1362ZM12.0542 15.5137C12.1826 15.505 12.3109 15.54 12.4209 15.61L16.2617 17.7888C16.3626 17.85 16.4451 17.8238 16.5001 17.7888C16.5459 17.7625 16.6192 17.6925 16.6009 17.57L16.2434 14.805C16.2159 14.56 16.3259 14.3238 16.5276 14.1838C18.3976 12.9325 19.4701 11.025 19.4701 8.95123C19.4701 5.33748 16.1517 2.39749 12.0634 2.39749C8.13091 2.39749 4.90423 5.12753 4.6659 8.55753C5.3534 8.30378 6.09591 8.16376 6.86591 8.16376C10.0284 8.16376 12.5951 10.4737 12.5951 13.3175C12.6042 14.0875 12.4117 14.8312 12.0542 15.5137Z" fill="#43A1FE"/>
                <path d="M4.19813 19.9063C3.95979 19.9063 3.73062 19.8451 3.51979 19.7138C3.10729 19.4601 2.8873 19.0226 2.9423 18.5588L3.12563 17.2113C1.88813 16.2488 1.15479 14.8225 1.15479 13.3263C1.15479 11.62 2.0898 10.0275 3.6573 9.0738C4.60146 8.48755 5.71978 8.17258 6.88395 8.17258C10.0465 8.17258 12.6131 10.4825 12.6131 13.3263C12.6131 14.4813 12.1731 15.6188 11.3665 16.5201C10.3306 17.7188 8.78146 18.4188 7.07646 18.4713L4.83979 19.7401C4.63812 19.8538 4.41813 19.9063 4.19813 19.9063ZM6.87479 9.48508C5.97646 9.48508 5.11478 9.72131 4.39062 10.1763C3.21728 10.8938 2.52062 12.0663 2.52062 13.3263C2.52062 14.5425 3.14396 15.6538 4.24396 16.3713C4.45479 16.5113 4.56479 16.7475 4.53729 16.9925L4.33562 18.4888L6.52645 17.2463C6.63645 17.1851 6.75562 17.15 6.87479 17.15C8.22229 17.15 9.49646 16.5988 10.3031 15.6626C10.9081 14.9801 11.229 14.175 11.229 13.3175C11.229 11.2088 9.27646 9.48508 6.87479 9.48508Z" fill="#43A1FE"/>
            </svg>
        )
    }
}

export default icons