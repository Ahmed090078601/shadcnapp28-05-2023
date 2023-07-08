import {defineType, defineField} from "sanity"
import {client} from "@/lib/sanityClient"
export const category = defineType(
    {
        name: "category",
        title: "Category",
        type: "document",
     fields: [
defineField({
    name: "name",
    title: "Category Name",
    type: "string",
    }),    
     ]
    }
)