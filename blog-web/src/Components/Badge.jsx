const styles = {
    first: "flex justify-center items-center gap-1 bg-primary text-white w-fit py-[4px] px-[10px] border-primary rounded-md text-[14px] gap-[4px]",
    second: "flex justify-center items-center gap-1 bg-gray text-primary w-fit py-[4px] px-[10px] border-gray rounded-md text-[14px] gap-[4px]",
}

export const Badge = ({tag="Technology", style = true }) => {
    return <div className={style ? styles.first : styles.second }>{tag}</div>
          
}