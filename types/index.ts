export interface TestimonialProps {
    name:string;
    review:string;
    icon:string;
    location:string;
}
export interface ChatProps {
    messages:string[]
    position:string
    text:string 
}
export interface ChatCompletionProps {
    position:string
    text:string 
}