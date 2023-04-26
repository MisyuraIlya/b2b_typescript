import Container from '../../components/ui/Container/Container';
import Button2 from '../../components/ui/Button2/Button2';
import type{ IProduct } from '../../models/product.interface';
import type{ ICategory } from '../../models/category.interface';
import { API_BACKEND } from '../AuthModule/constructor';
import { Modal } from '../CatalogModule/constructor';
import {PopUpCard} from '../CatalogModule/constructor';
import { defaultProduct } from '../../models/product.interface';
import {AddToCart} from '../CatalogModule/constructor';
import { ProductService } from '../HeaderModule/constructor';
import { CategoryService } from '../HeaderModule/constructor';
export {Container, Button2, IProduct, ICategory, API_BACKEND, PopUpCard, Modal, defaultProduct,AddToCart, ProductService, CategoryService }