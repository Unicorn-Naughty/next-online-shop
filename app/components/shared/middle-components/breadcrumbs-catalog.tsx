"use client";
import { allCategories } from "@/constants/const-prisma/categories";
import { getPath } from "@/lib/get-path";
import { usePathname } from "next/navigation";
import React from "react";
import { BreadCrumb } from "../..";
import { BreadcrumbSeparator } from "../../ui/breadcrumb";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const BreadcrumbsCatalog: React.FC<Props> = ({ className }) => {
  const paths = usePathname();
  const pathLinks = paths.split("/").filter((path) => path);

  const breadcrumbsList = getPath(allCategories, pathLinks);

  return (
    <BreadCrumb.Breadcrumb className={cn("", className)}>
      <BreadCrumb.BreadcrumbList>
        <BreadCrumb.BreadcrumbItem>
          <BreadCrumb.BreadcrumbLink href="/">
            Главная
          </BreadCrumb.BreadcrumbLink>
        </BreadCrumb.BreadcrumbItem>
        <BreadcrumbSeparator />
        {breadcrumbsList.map((item, i) => {
          const lastItem = i === breadcrumbsList.length - 1;
          if (!lastItem) {
            return (
              <BreadCrumb.BreadcrumbItem key={i}>
                <BreadCrumb.BreadcrumbLink href={item.url}>
                  {item.name}
                </BreadCrumb.BreadcrumbLink>
                <BreadcrumbSeparator />
              </BreadCrumb.BreadcrumbItem>
            );
          } else {
            return (
              <BreadCrumb.BreadcrumbItem key={i}>
                <BreadCrumb.BreadcrumbPage>
                  {item.name}
                </BreadCrumb.BreadcrumbPage>
              </BreadCrumb.BreadcrumbItem>
            );
          }
        })}
      </BreadCrumb.BreadcrumbList>
    </BreadCrumb.Breadcrumb>
  );
};
