import React from "react";

type FormEntryProps = {
    type?: string,
    name: string
}

function FormEntry(props: FormEntryProps) {
    return (
        <input
            className="pal-bg-grey p-2 rounded-sm"
            type={props.type ?? "text"}
            name={props.name}
            placeholder={props.name}
        />
    );
}

type FormProps = {
    onSubmit: React.SubmitEventHandler<HTMLFormElement>,
    children: React.ReactNode,
};

type FormSubmitProps = {
    text: string
}

function FormSubmit(props: FormSubmitProps) {
    return (
        <button
            className="pal-bg-highlight rounded-sm p-2"
            type="submit"
        >
            {props.text}
        </button>
    );
}

function Form(props: FormProps) {
    return (
        <form onSubmit={props.onSubmit} className="flex-col flex max-w-sm gap-4">
            {props.children}
        </form>
    );
}

export { FormEntry, Form, FormSubmit }