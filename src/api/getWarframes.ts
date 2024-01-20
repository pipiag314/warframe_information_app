// fetching all warframes available
export const getWarframes = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
    if(!res.ok) {
        throw new Error("Something went wrong!");
    }
    return res.json();
}

// fetching one single warframe 
export const getSingleWarframe = async (name: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${name}`)
    if(!res.ok) throw new Error("Something went wrong!");
    return res.json();
}