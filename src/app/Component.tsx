
// wait 2s
const getData = async () => {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('data')
        }, 5000)
    })
}

export default async function Component() {
    const data = await getData()
    console.log(data)

    return (
        <div>Loaded</div>
    )
}