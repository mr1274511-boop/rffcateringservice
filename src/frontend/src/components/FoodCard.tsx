import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { t } from "../translations";
import type { MenuItem } from "../types";

interface FoodCardProps {
  item: MenuItem;
  index: number;
  onAddToCart?: (item: MenuItem) => void;
  inCart?: boolean;
}

export function FoodCard({ item, index, onAddToCart, inCart }: FoodCardProps) {
  const { language } = useLanguage();
  const name = item.name[language] || item.name.en;
  const description = item.description[language] || item.description.en;
  const price = item.price !== undefined ? Number(item.price) : null;

  return (
    <Card
      className="overflow-hidden group hover:shadow-elevated transition-smooth border-border bg-card"
      data-ocid={`food_card.item.${index}`}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-muted">
        <img
          src={item.imageUrl || "/assets/images/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "/assets/images/placeholder.svg";
          }}
        />
        {!item.isAvailable && (
          <div className="absolute inset-0 bg-background/70 flex items-center justify-center">
            <Badge variant="destructive" className="text-xs">
              {t(language, "notAvailable")}
            </Badge>
          </div>
        )}
        {item.isAvailable && inCart && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-primary text-primary-foreground text-xs">
              In Cart
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <h3 className="font-display font-semibold text-foreground text-base leading-snug mb-1 truncate">
          {name}
        </h3>
        <p className="text-muted-foreground text-xs line-clamp-2 mb-3 min-h-[2.5rem]">
          {description}
        </p>

        <div className="flex items-center justify-between gap-2">
          <span className="text-primary font-display font-bold text-lg">
            {price !== null ? (
              <>
                ₹{price.toLocaleString("en-IN")}{" "}
                <span className="text-xs text-muted-foreground font-body font-normal">
                  {t(language, "perKg")}
                </span>
              </>
            ) : (
              <span className="text-muted-foreground text-sm font-body">
                {t(language, "priceOnRequest")}
              </span>
            )}
          </span>
          {onAddToCart && item.isAvailable && (
            <Button
              type="button"
              size="sm"
              variant={inCart ? "secondary" : "default"}
              onClick={() => onAddToCart(item)}
              data-ocid={`food_card.add_button.${index}`}
              className="shrink-0"
            >
              <ShoppingCart size={14} className="mr-1.5" />
              {t(language, "addToCart")}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
