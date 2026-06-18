import { IHeading } from "@/@types/Ui"

const Heading = (props: IHeading) => {
    const {children, level = "h1", className = ""} = props;
    const Tag = level;

    return <Tag className={className}>{children}</Tag>;
}

export default Heading;