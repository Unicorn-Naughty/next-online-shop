'use client'

export type TPathRoute = {
    name: string,
    url: string
}

export function getPath(names: TPathRoute[], links: string[]) {

    const ls = []
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        for (let ind = 0; ind < links.length; ind++) {
            const element2 = links[ind];
            if (element.url.includes(element2)) {
                ls.push({ name: element.name, url: element.url })
            }
        }

    }
    return ls
}