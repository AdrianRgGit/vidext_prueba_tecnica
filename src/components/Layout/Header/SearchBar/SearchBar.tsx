"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Search } from "lucide-react";
import CustomInputField from "@/components/CustomInputs/CustomInputField";

const searchSchema = z.object({
  element: z.string(),
});

const SearchBar = () => {
  const searchForm = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      element: "",
    },
  });

  const onSubmit = (values: z.infer<typeof searchSchema>) => {
    console.log(values);
  };

  return (
    <article className="lg:w-1/2">
      <Form {...searchForm}>
        <form onSubmit={searchForm.handleSubmit(onSubmit)}>
          <CustomInputField
            type="text"
            name="search"
            placeholder="Hoy me apetece ver..."
            icon={<Search stroke="gray" />}
          />
        </form>
      </Form>
    </article>
  );
};

export default SearchBar;
