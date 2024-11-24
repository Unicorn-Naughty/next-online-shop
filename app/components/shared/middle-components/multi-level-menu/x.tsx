import React from "react";
interface Props {
  className?: string;
}
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuSub,
} from "@radix-ui/react-navigation-menu";

import { LINK_NAMES } from "@/constants/const-app/navbar";

export const X: React.FC<Props> = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex justify-around">
        {LINK_NAMES.map((item, i) => (
          <NavigationMenuItem className="" key={i}>
            {item.submenu ? (
              <>
                <NavigationMenuTrigger>
                  <ListItem
                    title={item.name}
                    href={item.url}
                    className={
                      item.url === "/catalog" ? "w-[200px] mx-auto" : ""
                    }
                  ></ListItem>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="NavigationMenuContent ">
                  <NavigationMenuSub>
                    <NavigationMenuList>
                      {item.submenu.map((subItem, i) => (
                        <NavigationMenuItem className="" key={i}>
                          {subItem.submenu ? (
                            <>
                              <NavigationMenuTrigger className="relative ">
                                <ListItem
                                  href={item.url + subItem.url}
                                  title={subItem.name}
                                >
                                  <ChevronRight className="width-[10px] h-[10px]" />
                                </ListItem>
                              </NavigationMenuTrigger>
                              <NavigationMenuContent className="absolute top-0 left-[200px] h-[100%] w-[200px] NavigationMenuContent">
                                <NavigationMenuSub>
                                  <NavigationMenuList>
                                    <NavigationMenuItem>
                                      {subItem.submenu.map((subzitem, i) => (
                                        <ListItem
                                          key={i}
                                          href={
                                            item.url +
                                            subItem.url +
                                            subzitem.url
                                          }
                                          title={subzitem.name}
                                        ></ListItem>
                                      ))}
                                    </NavigationMenuItem>
                                  </NavigationMenuList>
                                </NavigationMenuSub>
                              </NavigationMenuContent>
                            </>
                          ) : (
                            <ListItem
                              href={item.url + subItem.url}
                              title={subItem.name}
                            ></ListItem>
                          )}
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenuSub>
                </NavigationMenuContent>
              </>
            ) : (
              <ListItem
                className=""
                href={item.url}
                title={item.name}
              ></ListItem>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <span>
      <NavigationMenuLink className="" asChild>
        <a
          ref={ref}
          className={cn(
            "flex justify-between select-none space-y-1    rounded-md p-3 leading-none  border-transparent transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className={cn("text-[15px] leading-none w-[100%]")}>
            {title}
          </div>

          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </span>
  );
});
ListItem.displayName = "ListItem";
