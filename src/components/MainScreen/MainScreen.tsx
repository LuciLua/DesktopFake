function MainScreen({ children }) {
    return (
        <div className="relative h-[calc(100%-calc(30px+70px))] w-full z-10 flex justify-center items-center">
            {children}
        </div>
    )
}

export default MainScreen