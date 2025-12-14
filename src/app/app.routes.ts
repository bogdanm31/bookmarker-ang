import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  loadComponent: () => import('./views/home/home').then(
    r => r.Home
  )
}, {
  path: 'bookmarks/create',
  pathMatch: 'full',
  loadComponent: () => import('./views/bookmarks/bookmark-create/bookmark-create').then(
    r => r.BookmarkCreate
  )
}, {
  path: 'bookmarks/:id/edit',
  pathMatch: 'full',
  loadComponent: () => import('./views/bookmarks/bookmark-edit/bookmark-edit').then(
    r => r.BookmarkEdit
  )
}, {
  path: '**',
  loadComponent: () => import('./views/errors/page-404/page-404').then(
    r => r.Page404
  )
}];
